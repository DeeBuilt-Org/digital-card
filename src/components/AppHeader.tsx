import type { ReactNode } from 'react';
import { IdcardOutlined } from '@ant-design/icons';
import './app-header.css';

/**
 * AppHeader — Digital Card's own sticky header: app mark + tool name on the
 * left, page controls (theme toggle) on the right. Colors come from the
 * --app-header-* variables in app-header.css, which flip with the html.dark
 * class the theme hook toggles.
 */
export function AppHeader({ actions }: { actions?: ReactNode }) {
  return (
    <header className="app-header">
      <div className="app-header__title">
        <IdcardOutlined className="app-header__mark" aria-hidden />
        <h1 className="app-header__name">Digital Card</h1>
      </div>
      {actions && <div className="app-header__actions">{actions}</div>}
    </header>
  );
}
