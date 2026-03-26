interface Env {
  DKIM_PRIVATE_KEY: string;
  MAILCHANNELS_API_KEY: string;
}

interface ContactForm {
  name: string;
  email: string;
  emailConfirm: string;
  tel: string;
  address: string;
  categories: string[];
  message: string;
}

export const onRequestPost: PagesFunction<Env> = async (context) => {
  try {
    const body = await context.request.json() as ContactForm;

    // バリデーション
    if (!body.name || !body.email || !body.message || body.categories.length === 0) {
      return new Response(JSON.stringify({ error: "必須項目が不足しています" }), {
        status: 400,
        headers: { "Content-Type": "application/json" },
      });
    }

    // メール本文
    const mailBody = `
草加自民党・無所属の会 お問い合わせフォームより

■ お問い合わせの種別
${body.categories.join("、")}

■ お問い合わせ内容
${body.message}

■ お名前
${body.name}

■ メールアドレス
${body.email}

■ 電話番号
${body.tel || "未記入"}

■ 住所
${body.address || "未記入"}

---
このメールは草加自民党・無所属の会 公式サイトから自動送信されました。
    `.trim();

    // MailChannels 送信
    const response = await fetch("https://api.mailchannels.net/tx/v1/send", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${context.env.MAILCHANNELS_API_KEY}`,
      },
      body: JSON.stringify({
        personalizations: [
          {
            to: [
              { email: "i.onoue@gmail.com", name: "草加自民党 事務局" },
            ],
            dkim_domain: "soka-jsg.com",
            dkim_selector: "mailchannels",
            dkim_private_key: context.env.DKIM_PRIVATE_KEY,
          },
        ],
        from: {
          email: "noreply@soka-jsg.com",
          name: "草加自民党・無所属の会 公式サイト",
        },
        reply_to: {
          email: body.email,
          name: body.name,
        },
        subject: `【お問い合わせ】${body.categories.join("・")} - ${body.name} 様`,
        content: [
          {
            type: "text/plain",
            value: mailBody,
          },
        ],
      }),
    });

    if (!response.ok && response.status !== 202) {
      const error = await response.text();
      console.error("MailChannels error:", error);
      return new Response(JSON.stringify({ error: `MailChannels error (${response.status}): ${error}` }), {
        status: 500,
        headers: { "Content-Type": "application/json" },
      });
    }

    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });

  } catch (e: any) {
    console.error(e);
    return new Response(JSON.stringify({ error: "サーバーエラーが発生しました" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
};
