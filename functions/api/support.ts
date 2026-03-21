interface Env {
  DB: D1Database;
}

interface SupportForm {
  name: string;
  email: string;
  area?: string;
  supportMember?: string;
  message?: string;
}

const MEMBER_LABELS: Record<string, string> = {
  shibano: "芝野 勝利",
  shiraishi: "白石 孝雄",
  tanaka: "田中 宣光",
  ogawa: "小川 としや",
  yabe: "矢部 正平",
  kimura: "木村 忠義",
  matsui: "松井 優美子",
  all: "会派全体",
};

export const onRequestPost: PagesFunction<Env> = async (context) => {
  try {
    const body = await context.request.json() as SupportForm;

    if (!body.name || !body.email) {
      return new Response(JSON.stringify({ error: "お名前とメールアドレスは必須です" }), {
        status: 400,
        headers: { "Content-Type": "application/json" },
      });
    }

    // D1に保存
    await context.env.DB.prepare(`
      INSERT INTO supporters (name, email, area, support_member, message)
      VALUES (?, ?, ?, ?, ?)
    `)
      .bind(
        body.name,
        body.email,
        body.area || null,
        body.supportMember || null,
        body.message || null,
      )
      .run();

    // メール通知（MailChannels）
    const memberLabel = body.supportMember ? (MEMBER_LABELS[body.supportMember] ?? body.supportMember) : "指定なし";
    const mailBody = `
草加自民党・無所属の会 後援会入会お申し込み

■ お名前
${body.name}

■ メールアドレス
${body.email}

■ お住まいの地区
${body.area || "未記入"}

■ 応援したい議員
${memberLabel}

■ メッセージ
${body.message || "なし"}

---
このメールは草加自民党・無所属の会 公式サイトから自動送信されました。
    `.trim();

    await fetch("https://api.mailchannels.net/tx/v1/send", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        personalizations: [
          {
            to: [{ email: "dummy@example.com", name: "草加自民党 事務局" }],
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
        subject: `【後援会入会】${body.name} 様よりお申し込み`,
        content: [{ type: "text/plain", value: mailBody }],
      }),
    });

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
