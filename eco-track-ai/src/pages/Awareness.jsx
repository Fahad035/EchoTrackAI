import { Link } from "react-router-dom";

function Awareness() {
    return (
        <div className="bg-gray-50">

            {/* Hero Section */}

            <section className="bg-green-700 text-white py-20">
                <div className="max-w-6xl mx-auto px-6 text-center">

                    <h1 className="text-5xl font-bold mb-6">
                        Carbon Footprint Awareness
                    </h1>

                    <p className="text-xl max-w-3xl mx-auto">
                        Learn how your daily activities impact the environment
                        and discover practical ways to reduce carbon emissions
                        for a sustainable future.
                    </p>

                </div>
            </section>

            {/* What is Carbon Footprint */}

            <section className="py-16">
                <div className="max-w-6xl mx-auto px-6">

                    <h2 className="text-4xl font-bold mb-6 text-green-700">
                        What is a Carbon Footprint?
                    </h2>

                    <p className="text-lg leading-8 text-gray-700">
                        A carbon footprint is the total amount of greenhouse gases,
                        mainly carbon dioxide (CO₂), released into the atmosphere
                        through everyday activities such as transportation,
                        electricity consumption, food production, and waste generation.
                        The larger your carbon footprint, the greater your contribution
                        to climate change and global warming.
                    </p>

                </div>
            </section>

            {/* Why It Matters */}

            <section className="bg-white py-16">
                <div className="max-w-6xl mx-auto px-6">

                    <h2 className="text-4xl font-bold mb-10 text-center text-green-700">
                        Why Should We Care?
                    </h2>

                    <div className="grid md:grid-cols-3 gap-8">

                        <div className="bg-green-50 p-6 rounded-xl shadow">
                            <h3 className="text-2xl font-bold mb-3">
                                Climate Change
                            </h3>

                            <p>
                                Increased carbon emissions lead to rising temperatures,
                                extreme weather events, droughts, floods, and melting glaciers.
                            </p>
                        </div>

                        <div className="bg-green-50 p-6 rounded-xl shadow">
                            <h3 className="text-2xl font-bold mb-3">
                                Air Pollution
                            </h3>

                            <p>
                                Carbon emissions contribute to poor air quality and
                                respiratory diseases affecting millions of people.
                            </p>
                        </div>

                        <div className="bg-green-50 p-6 rounded-xl shadow">
                            <h3 className="text-2xl font-bold mb-3">
                                Future Generations
                            </h3>

                            <p>
                                Sustainable choices today help protect natural resources
                                and biodiversity for future generations.
                            </p>
                        </div>

                    </div>

                </div>
            </section>

            {/* Sources */}

            <section className="py-16">
                <div className="max-w-6xl mx-auto px-6">

                    <h2 className="text-4xl font-bold text-center text-green-700 mb-10">
                        Major Sources of Carbon Emissions
                    </h2>

                    <div className="grid md:grid-cols-2 gap-8">

                        <div className="bg-white p-6 rounded-xl shadow">
                            <h3 className="text-2xl font-bold mb-3">
                                🚗 Transportation
                            </h3>

                            <ul className="list-disc ml-5 space-y-2">
                                <li>Cars and motorcycles</li>
                                <li>Flights and air travel</li>
                                <li>Fuel-powered transport</li>
                                <li>Daily commuting</li>
                            </ul>
                        </div>

                        <div className="bg-white p-6 rounded-xl shadow">
                            <h3 className="text-2xl font-bold mb-3">
                                ⚡ Electricity Usage
                            </h3>

                            <ul className="list-disc ml-5 space-y-2">
                                <li>Coal-powered electricity</li>
                                <li>Air conditioners</li>
                                <li>High energy appliances</li>
                                <li>Excessive electricity consumption</li>
                            </ul>
                        </div>

                        <div className="bg-white p-6 rounded-xl shadow">
                            <h3 className="text-2xl font-bold mb-3">
                                🍔 Food Choices
                            </h3>

                            <ul className="list-disc ml-5 space-y-2">
                                <li>Meat-heavy diets</li>
                                <li>Processed foods</li>
                                <li>Food transportation</li>
                                <li>Food waste</li>
                            </ul>
                        </div>

                        <div className="bg-white p-6 rounded-xl shadow">
                            <h3 className="text-2xl font-bold mb-3">
                                🗑 Waste Generation
                            </h3>

                            <ul className="list-disc ml-5 space-y-2">
                                <li>Plastic waste</li>
                                <li>Landfills</li>
                                <li>Poor recycling practices</li>
                                <li>Single-use products</li>
                            </ul>
                        </div>

                    </div>

                </div>
            </section>

            {/* Reduction Tips */}

            <section className="bg-green-50 py-16">
                <div className="max-w-6xl mx-auto px-6">

                    <h2 className="text-4xl font-bold text-center text-green-700 mb-10">
                        Simple Ways to Reduce Your Carbon Footprint
                    </h2>

                    <div className="grid md:grid-cols-2 gap-8">

                        <div className="bg-white p-6 rounded-xl shadow">
                            <h3 className="text-xl font-bold mb-4">
                                🚲 Sustainable Transportation
                            </h3>

                            <ul className="space-y-2">
                                <li>✓ Walk short distances</li>
                                <li>✓ Use bicycles</li>
                                <li>✓ Carpool with colleagues</li>
                                <li>✓ Use public transport</li>
                            </ul>
                        </div>

                        <div className="bg-white p-6 rounded-xl shadow">
                            <h3 className="text-xl font-bold mb-4">
                                💡 Save Energy
                            </h3>

                            <ul className="space-y-2">
                                <li>✓ Switch to LED bulbs</li>
                                <li>✓ Turn off unused devices</li>
                                <li>✓ Use energy-efficient appliances</li>
                                <li>✓ Set AC to 24–26°C</li>
                            </ul>
                        </div>

                        <div className="bg-white p-6 rounded-xl shadow">
                            <h3 className="text-xl font-bold mb-4">
                                🌱 Green Food Habits
                            </h3>

                            <ul className="space-y-2">
                                <li>✓ Eat more plant-based meals</li>
                                <li>✓ Reduce food waste</li>
                                <li>✓ Buy local products</li>
                                <li>✓ Carry reusable containers</li>
                            </ul>
                        </div>

                        <div className="bg-white p-6 rounded-xl shadow">
                            <h3 className="text-xl font-bold mb-4">
                                ♻ Waste Management
                            </h3>

                            <ul className="space-y-2">
                                <li>✓ Recycle materials</li>
                                <li>✓ Avoid plastic bags</li>
                                <li>✓ Reuse products</li>
                                <li>✓ Segregate waste properly</li>
                            </ul>
                        </div>

                    </div>

                </div>
            </section>

            {/* Daily Checklist */}

            <section className="py-16">
                <div className="max-w-5xl mx-auto px-6">

                    <h2 className="text-4xl font-bold text-center text-green-700 mb-10">
                        Daily Green Habits Checklist
                    </h2>

                    <div className="bg-white shadow-lg rounded-xl p-8">

                        <div className="space-y-4 text-lg">

                            <label className="block">
                                <input type="checkbox" className="mr-3" />
                                Used Public Transport
                            </label>

                            <label className="block">
                                <input type="checkbox" className="mr-3" />
                                Switched Off Unused Lights
                            </label>

                            <label className="block">
                                <input type="checkbox" className="mr-3" />
                                Avoided Plastic Bags
                            </label>

                            <label className="block">
                                <input type="checkbox" className="mr-3" />
                                Recycled Waste
                            </label>

                            <label className="block">
                                <input type="checkbox" className="mr-3" />
                                Conserved Water
                            </label>

                        </div>

                    </div>

                </div>
            </section>

            {/* Pledge */}

            <section className="bg-green-700 text-white py-16">
                <div className="max-w-4xl mx-auto text-center px-6">

                    <h2 className="text-4xl font-bold mb-6">
                        Take the Green Pledge
                    </h2>

                    <p className="text-xl mb-8">
                        I pledge to reduce my carbon footprint by making
                        environmentally responsible choices every day.
                    </p>

                    <Link
                        to="/pledge"
                        className="bg-white text-green-700 px-8 py-4 rounded-lg font-bold">
                        🌍 Take The Pledge
                    </Link>

                </div>
            </section>

        </div>
    );
}

export default Awareness;