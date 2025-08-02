import { Link } from "react-router-dom"

const TermsPage = () => {
    return (
        <div className="min-h-screen bg-gray-50 py-8">
            <div className="max-w-4xl mx-auto px-6">
                <div className="bg-white rounded-lg shadow-lg p-8">
                    <div className="text-center mb-8">
                        <h1 className="text-3xl font-bold text-gray-900 mb-2">Terms & Conditions</h1>
                        <p className="text-gray-600">Effective Date: August 2, 2025</p>
                    </div>

                    <div className="prose prose-lg max-w-none">
                        <p className="text-gray-700 mb-6">
                            Welcome to JobLite (job-lite.vercel.app). By using our website, platform, or services, you agree to be bound by the following terms and conditions:
                        </p>

                        <div className="space-y-6">
                            <section>
                                <h2 className="text-xl font-semibold text-gray-900 mb-3">1. Overview</h2>
                                <p className="text-gray-700">
                                    JobLite is a platform that helps students and job seekers find off-campus job opportunities, internships, and career-building competitions such as hackathons. We do not guarantee job placements, but provide access to opportunities posted by third parties.
                                </p>
                            </section>

                            <section>
                                <h2 className="text-xl font-semibold text-gray-900 mb-3">2. User Accounts</h2>
                                <ul className="list-disc list-inside text-gray-700 space-y-2">
                                    <li>Users must register with accurate details.</li>
                                    <li>You are responsible for maintaining the confidentiality of your account.</li>
                                    <li>JobLite reserves the right to suspend or terminate accounts found violating policies or engaging in fraudulent activities.</li>
                                </ul>
                            </section>

                            <section>
                                <h2 className="text-xl font-semibold text-gray-900 mb-3">3. Use of the Platform</h2>
                                <ul className="list-disc list-inside text-gray-700 space-y-2">
                                    <li>Users may browse job listings, participate in competitions, and apply to opportunities.</li>
                                    <li>Employers or recruiters posting jobs must ensure the content is accurate and lawful.</li>
                                    <li>Spam, fake listings, or scams are strictly prohibited.</li>
                                </ul>
                            </section>

                            <section>
                                <h2 className="text-xl font-semibold text-gray-900 mb-3">4. Fees and Pricing</h2>
                                <ul className="list-disc list-inside text-gray-700 space-y-2">
                                    <li>Currently, JobLite is 100% free to use for both job seekers and companies.</li>
                                    <li>There are no hidden fees, and users will be informed if this changes in the future.</li>
                                    <li>If we introduce paid features (e.g., premium job listings, resume reviews), a full breakdown of pricing will be available on our pricing page.</li>
                                </ul>
                            </section>

                            <section>
                                <h2 className="text-xl font-semibold text-gray-900 mb-3">5. Refund Policy</h2>
                                <ul className="list-disc list-inside text-gray-700 space-y-2">
                                    <li>Since all features are currently free, no payments or subscriptions are being collected.</li>
                                    <li>Once we introduce paid features:</li>
                                    <ul className="list-disc list-inside ml-6 space-y-1">
                                        <li>Subscription-based services (if any) will follow a transparent monthly or yearly model.</li>
                                        <li>Refunds, if applicable, will be processed only for unused services and within 7 days of payment.</li>
                                    </ul>
                                </ul>
                            </section>

                            <section>
                                <h2 className="text-xl font-semibold text-gray-900 mb-3">6. Data Privacy</h2>
                                <ul className="list-disc list-inside text-gray-700 space-y-2">
                                    <li>We take your privacy seriously.</li>
                                    <li>Please refer to our Privacy Policy for details on how your data is collected, stored, and used.</li>
                                </ul>
                            </section>

                            <section>
                                <h2 className="text-xl font-semibold text-gray-900 mb-3">7. Liability</h2>
                                <ul className="list-disc list-inside text-gray-700 space-y-2">
                                    <li>JobLite is a facilitator and does not participate in the hiring process.</li>
                                    <li>We are not responsible for the actions of companies or users using the platform.</li>
                                </ul>
                            </section>

                            <section>
                                <h2 className="text-xl font-semibold text-gray-900 mb-3">8. Modifications</h2>
                                <p className="text-gray-700">
                                    We may update these terms at any time. Continued use of the platform implies acceptance of any changes.
                                </p>
                            </section>

                            <section>
                                <h2 className="text-xl font-semibold text-gray-900 mb-3">9. Contact</h2>
                                <p className="text-gray-700">
                                    For questions or legal concerns, contact us at:
                                </p>
                                <p className="text-gray-700 mt-2">
                                    📧 vinitpatil28@gmail.com
                                </p>
                            </section>
                        </div>

                        <div className="mt-8 pt-6 border-t border-gray-200">
                            <Link 
                                to="/"
                                className="inline-flex items-center px-4 py-2 bg-[#1196c2] text-white rounded-md hover:bg-[rgb(36,131,163)] transition-colors duration-200"
                            >
                                ← Back to Home
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TermsPage 