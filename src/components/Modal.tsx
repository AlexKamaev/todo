'use client';

import { IModalProps } from '@/types';
import { useRouter } from 'next/navigation';

export function Modal({ children }: IModalProps) {
    const router = useRouter();

    const handleBackdropClick = (e: React.MouseEvent) => {
        if (e.target === e.currentTarget) {
            router.back();
        }
    };

    return (
        <div className="alx-modal alx-is-active">
            <div
                className="alx-modal-background"
                onClick={handleBackdropClick}
            ></div>
            <div
                className="alx-modal-content"
                onClick={(e) => e.stopPropagation()}
            >
                <button
                    className="alx-modal-close alx-is-large"
                    aria-label="close"
                    onClick={() => router.back()}
                ></button>
                <div>{children}</div>
            </div>
        </div>
    );
}
