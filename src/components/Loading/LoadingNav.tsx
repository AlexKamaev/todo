export default function LoadingNav() {
    return (
        <nav className="alx-level">
            <div className="alx-level-left"></div>
            <div className="alx-level-right alx-is-flex-direction-row">
                <div className="alx-level-item">
                    <div className="alx-field alx-has-addons">
                        <p className="alx-control alx-has-icons-right">
                            <input
                                className="alx-input alx-is-skeleton"
                                type="text"
                            />
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
                                aria-haspopup="true"
                            >
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
    );
}
