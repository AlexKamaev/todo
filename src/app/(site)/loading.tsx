import { renderStatus } from '@/utils/renderStatus';
import { todo } from 'node:test';

const SKELETON_COUNT = 15;

export default async function Loading() {
  return (
    <main className="alx-container">
      <div className="alx-section">
        <nav className="alx-level">
          <div className="alx-level-left"></div>
          <div className="alx-level-right alx-is-flex-direction-row">
            <div className="alx-level-item">
              <div className="alx-field alx-has-addons">
                <p className="alx-control alx-has-icons-right">
                  <input className="alx-input alx-is-skeleton" type="text" />
                  <span className="alx-icon alx-is-small alx-is-right alx-is-skeleton">
                    <i className="fas fa-magnifying-glass"></i>
                  </span>
                </p>
              </div>
            </div>
            <div className="alx-level-item">
              <div className="alx-dropdown ">
                <div className="alx-dropdown-trigger">
                  <button
                    className="alx-button alx-is-skeleton"
                    aria-haspopup="true">
                    <span className="alx-icon-text">
                      <span className="alx-icon"></span>
                    </span>
                  </button>
                </div>
              </div>
            </div>
            <div className="alx-level-item">
              <button className="alx-button alx-is-skeleton">
                <span className="alx-icon-text">
                  <span className="alx-icon"></span>
                </span>
              </button>
            </div>
          </div>
        </nav>

        <p className="alx-content">
          <span className="alx-is-skeleton">## tasks found.</span>
        </p>

        <div className="alx-columns alx-is-multiline">
          {Array.from({ length: SKELETON_COUNT }).map((_, index) => (
            <div
              key={index}
              className="alx-column alx-is-12-mobile alx-is-6-tablet alx-is-4-desktop alx-is-3-widescreen">
              <div className="alx-card">
                <header className="alx-card-header">
                  <p className="alx-card-header-title">
                    <span className="alx-is-skeleton">Card title skeleton</span>
                  </p>
                  <span className="alx-card-header-icon">
                    <span className="alx-tag alx-is-skeleton">completed</span>
                  </span>
                </header>
                <div className="alx-card-content">
                  <div className="alx-content">
                    <div className="alx-skeleton-lines">
                      <div></div>
                      <div></div>
                      <div></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
