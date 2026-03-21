CREATE TABLE IF NOT EXISTS policy_likes (
  member_id    TEXT    NOT NULL,
  policy_index INTEGER NOT NULL,
  count        INTEGER NOT NULL DEFAULT 0,
  PRIMARY KEY (member_id, policy_index)
);
