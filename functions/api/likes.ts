// Cloudflare D1 型定義（@cloudflare/workers-types 未インストール環境用ローカル定義）
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
}

export const onRequestGet: PagesFunction<Env> = async (context) => {
  const { searchParams } = new URL(context.request.url);
  const memberId = searchParams.get('memberId');

  if (!memberId) {
    return new Response('Missing memberId', { status: 400 });
  }

  try {
    const { results } = await context.env.DB.prepare(
      'SELECT policy_index, count FROM policy_likes WHERE member_id = ?'
    )
      .bind(memberId)
      .all();

    const counts: Record<number, number> = {};
    results.forEach((row: any) => {
      counts[row.policy_index] = row.count;
    });

    return new Response(JSON.stringify(counts), {
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (e: any) {
    return new Response(e.message, { status: 500 });
  }
};

export const onRequestPost: PagesFunction<Env> = async (context) => {
  try {
    const { memberId, policyIndex } = (await context.request.json()) as {
      memberId: string;
      policyIndex: number;
    };

    if (memberId === undefined || policyIndex === undefined) {
      return new Response('Missing memberId or policyIndex', { status: 400 });
    }

    // Upsert the count
    await context.env.DB.prepare(`
      INSERT INTO policy_likes (member_id, policy_index, count)
      VALUES (?, ?, 1)
      ON CONFLICT(member_id, policy_index) DO UPDATE SET count = count + 1
    `)
      .bind(memberId, policyIndex)
      .run();

    // Fetch the new count
    const result = await context.env.DB.prepare(
      'SELECT count FROM policy_likes WHERE member_id = ? AND policy_index = ?'
    )
      .bind(memberId, policyIndex)
      .first<{ count: number }>();

    return new Response(JSON.stringify({ count: result?.count || 0 }), {
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (e: any) {
    return new Response(e.message, { status: 500 });
  }
};
