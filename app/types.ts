export type Post = {
  id: number;
  createdAt: string;
  updatedAt?: string | null;
  title: string;
  subtitle?: string | null;
  content?: string | null;
  published?: boolean | null;
  tag?: string | null;
  type?: Type;
  image: string | null;
};

enum Type {
  "BIKE",
  "GENERAL",
}
