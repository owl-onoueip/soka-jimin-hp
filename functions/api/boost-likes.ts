// Cloudflare D1 型定義
interface D1PreparedStatement {
  bind(...values: unknown[]): D1PreparedStatement;
  all<T = Record<string, unknown>>(): Promise<{ results: T[] }>;
  run(): Promise<void>;
  first<T = Record<string, unknown>>(): Promise<T | null>;
}

interface D1Database {
  prepare(query: string): D1PreparedStatement;
}

interface Env {
  DB: D1Database;
  // TODO: Cloudflare管理画面で設定する環境変数
  BOOST_SECRET?: string;
}

// 議員のIDと、その議員が持つ政策の数（インデックスの最大値+1）
const MEMBER_POLICY_COUNTS: Record<string, number> = {
  "1": 7,
  "2": 9,
  "3": 10,
  "4": 6,
  "5": 17,
  "6": 15,
  "7": 9,
};

export const onRequestGet: PagesFunction<Env> = async (context) => {
  const { searchParams } = new URL(context.request.url);
  const secret = searchParams.get('secret');

  // 1. シークレットキーの検証
  // ※環境変数が未設定の場合は、仮の文字列で検証（後でCloudflare管理画面で環境変数を設定してください）
  const validSecret = context.env.BOOST_SECRET || "Soka_Random_Boost_2026";
  if (secret !== validSecret) {
    return new Response('Unauthorized', { status: 401 });
  }

  // 2. 「サボり」判定（例：30%の確率で何もしない）
  if (Math.random() < 0.3) {
    return new Response(JSON.stringify({ status: "skipped", message: "Randomly skipped this time." }), {
      headers: { 'Content-Type': 'application/json' },
    });
  }

  // 3. 増加数の抽選（1〜4個）
  const boostCount = Math.floor(Math.random() * 4) + 1;
  const memberIds = Object.keys(MEMBER_POLICY_COUNTS);
  
  const boostedItems = [];

  try {
    // 4. ランダムに対象を選んで「いいね」を加算
    for (let i = 0; i < boostCount; i++) {
      // ランダムな議員を選択
      const randomMemberId = memberIds[Math.floor(Math.random() * memberIds.length)];
      const maxPolicies = MEMBER_POLICY_COUNTS[randomMemberId];
      
      // その議員のランダムな政策を選択
      const randomPolicyIndex = Math.floor(Math.random() * maxPolicies);

      // Upsert実行
      await context.env.DB.prepare(`
        INSERT INTO policy_likes (member_id, policy_index, count)
        VALUES (?, ?, 1)
        ON CONFLICT(member_id, policy_index) DO UPDATE SET count = count + 1
      `)
        .bind(randomMemberId, randomPolicyIndex)
        .run();

      boostedItems.push({ memberId: randomMemberId, policyIndex: randomPolicyIndex });
    }

    return new Response(JSON.stringify({ 
      status: "success", 
      boostCount, 
      details: boostedItems 
    }), {
      headers: { 'Content-Type': 'application/json' },
    });

  } catch (e: any) {
    return new Response(JSON.stringify({ error: e.message }), { 
      status: 500,
      headers: { 'Content-Type': 'application/json' }
    });
  }
};
