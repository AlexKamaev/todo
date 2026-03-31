const CARD_COUNT = 15;

export default function LoadingCards() {
    return (
        <>
            <p className="alx-content">
                <span className="alx-is-skeleton">## tasks found.</span>
            </p>

            <div className="alx-columns alx-is-multiline">
                {Array.from({ length: CARD_COUNT }).map((_, index) => (
                    <div
                        key={index}
                        className="alx-column alx-is-12-mobile alx-is-6-tablet alx-is-4-desktop alx-is-3-widescreen"
                    >
                        <div className="alx-card">
                            <header className="alx-card-header">
                                <p className="alx-card-header-title">
                                    <span className="alx-is-skeleton">
                                        Card title skeleton
                                    </span>
                                </p>
                                <span className="alx-card-header-icon">
                                    <span className="alx-tag alx-is-skeleton">
                                        completed
                                    </span>
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
        </>
    );
}
