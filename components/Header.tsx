"use client";

export default function Header({ title }: { title?: string }) {
  return (
    <header style={{ background: '#0070f3', padding: 12, color: 'white' }}>
      <h2>Remote Header {title && `- ${title}`}</h2>
    </header>
  );
}
