export default function DocsContent() {
    return (
        <div className="flex-1 min-w-0 max-w-4xl lg:pl-12 lg:border-l lg:border-dark-800 py-2">
            <div className="prose prose-invert prose-lg max-w-none
                prose-headings:text-text-primary prose-headings:font-semibold
                prose-p:text-text-secondary prose-p:leading-relaxed
                prose-a:text-accent hover:prose-a:text-accent-hover
                prose-pre:bg-dark-800/80 prose-pre:border prose-pre:border-dark-700 prose-pre:shadow-xl prose-pre:shadow-black/20
                prose-code:text-accent-light prose-code:bg-accent/10 prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded-md
                marker:text-accent
            ">
                <h1 className="text-4xl sm:text-5xl lg:text-5xl font-semibold !mb-8">Introduction to Webgenix</h1>
                <p className="lead text-xl">
                    Welcome to the official Webgenix documentation. Here you'll find comprehensive guides and technical architecture documents to help you start working with our server infrastructure as quickly as possible.
                </p>

                <hr className="border-dark-800 my-10" />

                <h2>Quick Start</h2>
                <p>
                    The easiest way to get started with Webgenix is by using our official CLI tool. It allows you to initialize, configure, and deploy your projects directly from your terminal, completely bypassing the dashboard UI if you prefer a keyboard-heavy workflow.
                </p>

                <h3>Installation</h3>
                <p>Ensure you have Node.js 18 or newer installed, then run the snippet below to install the Webgenix command line tools globally on your machine:</p>

                <pre><code>npm install -g webgenix-cli</code></pre>

                <h3>Authentication</h3>
                <p>Before deploying your first application or provisioning a VPS, you must authenticate the CLI with your active Webgenix account using:</p>

                <pre><code>webgenix login</code></pre>

                <p>This will securely open a browser window for standard OAuth token generation. Once successful, the terminal will display a green <code>Login successful!</code> confirmation message.</p>

                <div className="bg-accent/10 border-l-4 border-accent p-6 rounded-r-xl my-10">
                    <h4 className="text-accent !mt-0 mb-2 font-semibold">Pro Tip</h4>
                    <p className="!mb-0 text-text-secondary text-base">
                        If you are setting this up in a CI/CD pipeline where opening a browser isn't possible, use the <code>WEBGENIX_TOKEN</code> environment variable instead of the interactive login command.
                    </p>
                </div>

                <h2>Deploying a Project</h2>
                <p>
                    Navigate to the directory of the application you wish to deploy. If you are using a standard framework ecosystem (like React, Next.js, Django, or Laravel), the CLI will automatically parse and detect the optimal build settings.
                </p>

                <pre><code>cd my-nextjs-app{'\n'}webgenix deploy --production</code></pre>

                <p>
                    The deployment process takes approximately 30-45 seconds for a standard build. Upon completion, the console will print a live global URL mapping to our edge network infrastructure (e.g., <code>my-nextjs-app.webgenix.dev</code>).
                </p>
            </div>

            <div className="mt-16 pt-8 border-t border-dark-800 flex items-center justify-between">
                <div></div>
                <a href="#quickstart" className="flex items-center gap-2 text-accent font-medium hover:text-accent-hover transition-colors group">
                    Next: Global Infrastructure Architecture 
                    <span className="transform group-hover:translate-x-1 transition-transform">→</span>
                </a>
            </div>
        </div>
    );
}
