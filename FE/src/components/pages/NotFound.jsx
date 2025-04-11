import { Link } from "react-router-dom";
import { Ghost } from "lucide-react";

export function NotFound() {
  return (
    <>
      <div className="flex min-h-screen flex-col items-center justify-center bg-gray-100 p-6">
        <div className="text-center">
          <Ghost className="mx-auto h-16 w-16 text-gray-400" />
          <h1 className="mt-4 text-4xl font-bold text-gray-800">
            404 - Not Found
          </h1>
          <p className="mt-2 text-gray-600">
            Halaman yang kamu cari tidak ditemukan. Mungkin sudah dipindahkan
            atau dihapus.
          </p>
          <div className="mt-6">
            <Link to="/">
              <div className="bg-blue-700 text-white font-bold rounded-2xl px-6 py-2 text-sm shadow">
                Kembali ke Beranda
              </div>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
