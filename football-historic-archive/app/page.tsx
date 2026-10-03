export default function Home() {
  return (
    <main className="min-h-screen bg-green-900 text-white p-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold mb-2">
          Football Historic Archive
        </h1>

        <p className="text-lg text-green-100 mb-10">
          Archivio storico del calcio
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white text-gray-900 rounded-xl p-6">
            <h2 className="text-2xl font-bold">Competizioni</h2>
            <p className="mt-2">
              Campionati, coppe e stagioni storiche.
            </p>
          </div>

          <div className="bg-white text-gray-900 rounded-xl p-6">
            <h2 className="text-2xl font-bold">Squadre</h2>
            <p className="mt-2">
              Storia, nomi, loghi, stadi e rose.
            </p>
          </div>

          <div className="bg-white text-gray-900 rounded-xl p-6">
            <h2 className="text-2xl font-bold">Partite</h2>
            <p className="mt-2">
              Risultati, formazioni ed eventi.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}