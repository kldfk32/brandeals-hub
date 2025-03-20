const { GitContentSource } = require('@stackbit/cms-git');

const gitContentSource = new GitContentSource({
    rootPath: __dirname,
    contentDirs: ['content'],
    assetsConfig: {
        referenceType: 'static',
        staticDir: 'public',
        uploadDir: 'images',
        publicPath: '/'
    }
});

module.exports = {
    stackbitVersion: '~0.7.0',
    ssgName: 'nextjs',
    nodeVersion: '18',
    contentSources: [gitContentSource],
    devServerUrl: 'http://localhost:8080'
};
