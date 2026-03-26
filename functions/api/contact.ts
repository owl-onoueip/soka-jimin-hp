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

    // メール本文 (HTML)
    const mailBody = `<!DOCTYPE html>
<html lang="ja">
<head><meta charset="utf-8"></head>
<body style="font-family:sans-serif;font-size:14px;color:#333;line-height:1.8;">
<p>草加自民党・無所属の会 お問い合わせフォームより</p>
<hr>
<p><strong>■ お問い合わせの種別</strong><br>${body.categories.join("、")}</p>
<p><strong>■ お問い合わせ内容</strong><br>${body.message.replace(/\n/g, "<br>")}</p>
<p><strong>■ お名前</strong><br>${body.name}</p>
<p><strong>■ メールアドレス</strong><br>${body.email}</p>
<p><strong>■ 電話番号</strong><br>${body.tel || "未記入"}</p>
<p><strong>■ 住所</strong><br>${body.address || "未記入"}</p>
<hr>
<p style="color:#999;font-size:12px;">このメールは草加自民党・無所属の会 公式サイトから自動送信されました。</p>
</body>
</html>`;

    // MailChannels 送信
    const response = await fetch("https://api.mailchannels.net/tx/v1/send", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-Api-Key": context.env.MAILCHANNELS_API_KEY,
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
            type: "text/html",
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
