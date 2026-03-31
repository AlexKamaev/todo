import type { Metadata } from 'next';
import './globals.scss';

export const metadata: Metadata = {
    title: 'Todo Viewer',
    description: 'Todo Viewer Application built with Next.js and TypeScript',
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body>{children}</body>
        </html>
    );
}
