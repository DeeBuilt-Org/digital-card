import { theme as antdTheme } from 'antd';

/** The "Made by DeeBuilt" credit in the footers and on the About and Privacy pages. */
export function DeeBuiltCredit() {
  const { token } = antdTheme.useToken();
  return (
    <span style={{ fontSize: 12, color: token.colorTextSecondary }}>
      Made by{' '}
      <a
        href="https://deebuilt.co"
        target="_blank"
        rel="noopener noreferrer"
        style={{ color: 'inherit', textDecoration: 'underline' }}
      >
        DeeBuilt
      </a>
    </span>
  );
}
