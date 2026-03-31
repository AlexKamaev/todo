import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
    /* config options here */
    reactCompiler: true,
    sassOptions: {
        // supress warning until next Bulma version is released
        silenceDeprecations: ['if-function'],
    },
};

export default nextConfig;
