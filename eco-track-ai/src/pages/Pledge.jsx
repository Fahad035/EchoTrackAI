import { useState, useRef } from "react";

function Pledge() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [city, setCity] = useState("");
  const [showCertificate, setShowCertificate] = useState(false);
  const [certificateId, setCertificateId] = useState("");

  const certificateRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    // generate certificate id on user action (avoids impure calls during render)
    setCertificateId("ECO-" + Math.floor(Math.random() * 100000));
    setShowCertificate(true);
  };

  const printCertificate = () => {
    window.print();
  };

  return (
    <div className="min-h-screen bg-linear-to-br from-green-100 via-white to-green-200 py-12 px-4">

      {!showCertificate ? (
        <div className="max-w-xl mx-auto bg-white rounded-3xl shadow-xl p-8">

          <h1 className="text-4xl font-bold text-center text-green-700 mb-6">
            🌍 Take The Green Pledge
          </h1>

          <p className="text-center text-gray-600 mb-8">
            Join our mission to reduce carbon emissions
            and create a greener future.
          </p>

          <form
            onSubmit={handleSubmit}
            className="space-y-5"
          >

            <input
              type="text"
              placeholder="Full Name"
              required
              value={name}
              onChange={(e) =>
                setName(e.target.value)
              }
              className="w-full border p-3 rounded-xl"
            />

            <input
              type="email"
              placeholder="Email"
              required
              value={email}
              onChange={(e) =>
                setEmail(e.target.value)
              }
              className="w-full border p-3 rounded-xl"
            />

            <input
              type="text"
              placeholder="City"
              required
              value={city}
              onChange={(e) =>
                setCity(e.target.value)
              }
              className="w-full border p-3 rounded-xl"
            />

            <button
              type="submit"
              className="w-full bg-green-700 text-white py-3 rounded-xl font-semibold hover:bg-green-800"
            >
              Generate Certificate
            </button>

          </form>

        </div>
      ) : (
        <div className="flex flex-col items-center">

          <style>{`@media print { body * { visibility: hidden; } #certificate-printable, #certificate-printable * { visibility: visible; } #certificate-printable { position: absolute; left: 0; top: 0; width: 100%; } }`}</style>

          {/* Certificate */}

          <div
            id="certificate-printable"
            ref={certificateRef}
            className="w-full max-w-4xl bg-white border-8 border-green-700 rounded-3xl p-10 relative overflow-hidden shadow-2xl"
          >

            {/* Watermark */}

            <div className="absolute inset-0 flex items-center justify-center opacity-5 text-[250px] font-bold text-green-700">🌱</div>

            {/* Top */}

            <div className="text-center">

              <div className="text-6xl mb-3">
                🌍
              </div>

              <h1 className="text-5xl font-extrabold text-green-700">
                EcoTrack AI
              </h1>

              <p className="text-gray-500 mt-2">
                Carbon Footprint Awareness Platform
              </p>

            </div>

            <div className="my-8 border-b-2 border-green-600"></div>

            <h2 className="text-center text-4xl font-bold text-green-800">
              GREEN PLEDGE CERTIFICATE
            </h2>

            <p className="text-center text-xl mt-6 text-gray-700">
              This certificate is proudly awarded to
            </p>

            <h3 className="text-center text-6xl font-extrabold text-green-700 mt-6 mb-6">
              {name}
            </h3>

            <p className="text-center text-2xl max-w-4xl mx-auto text-gray-700 leading-relaxed">
              For taking the Green Pledge and committing
              to reduce carbon emissions, promote sustainable
              practices, and contribute towards a cleaner,
              greener, and healthier planet.
            </p>

            <div className="grid grid-cols-3 gap-10 mt-12">

              <div className="text-center">
                <p className="font-bold text-green-700">
                  City
                </p>
                <p>{city}</p>
              </div>

              <div className="text-center">
                <p className="font-bold text-green-700">
                  📅 Date
                </p>
                <p>
                  {new Date().toLocaleDateString()}
                </p>
              </div>

              <div className="text-center">
                <p className="font-bold text-green-700">
                  Certificate ID
                </p>
                <p>{certificateId}</p>
              </div>

            </div>

            {/* Bottom */}

            <div className="flex justify-between mt-16">

              <div className="text-center">
                <div className="border-t-2 border-black w-48"></div>
                <p className="mt-2 font-semibold italic">
                  Md Fahad
                </p>
                <p className="text-xs text-gray-600">Digital Signature</p>
              </div>

              <div className="text-center bg-green-700 text-white rounded-full w-32 h-32 flex flex-col justify-center items-center font-bold">
                VERIFIED
                <span className="text-xs">
                  GREEN PLEDGE
                </span>
              </div>

              <div className="text-center">
                <div className="border-t-2 border-black w-48"></div>
                <p className="mt-2 font-semibold">
                  EcoTrack AI
                </p>
              </div>

            </div>

          </div>

          <button
            onClick={printCertificate}
            className="mt-8 bg-green-700 text-white px-8 py-4 rounded-xl text-lg font-bold hover:bg-green-800"
          >
            Print Certificate
          </button>

        </div>
      )}

    </div>
  );
}

export default Pledge;