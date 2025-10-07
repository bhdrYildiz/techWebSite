import React from "react";

export default function MusterilerPage() {
    return (
        <div className="min-h-screen bg-gray-50">
            <div className="container mx-auto px-4 py-16">
                <div className="text-center mb-12">
                    <h1 className="text-4xl font-bold text-gray-900 mb-4">
                        Müşterilerimiz
                    </h1>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                        Başarılı projelerimiz ve memnun müşterilerimizle gurur duyuyoruz.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {/* Müşteri kartları buraya eklenecek */}
                    <div className="bg-white rounded-lg shadow-md p-6 text-center">
                        <div className="w-16 h-16 bg-blue-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                            <span className="text-2xl font-bold text-blue-600">A</span>
                        </div>
                        <h3 className="text-xl font-semibold mb-2">Örnek Müşteri 1</h3>
                        <p className="text-gray-600">
                            &ldquo;OsianaTech ile çalışmak harika bir deneyimdi. Profesyonel yaklaşımları ve kaliteli çözümleri sayesinde işimizi büyüttük.&rdquo;
                        </p>
                    </div>

                    <div className="bg-white rounded-lg shadow-md p-6 text-center">
                        <div className="w-16 h-16 bg-green-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                            <span className="text-2xl font-bold text-green-600">B</span>
                        </div>
                        <h3 className="text-xl font-semibold mb-2">Örnek Müşteri 2</h3>
                        <p className="text-gray-600">
                            &ldquo;Modern teknolojilerle geliştirilen web sitemiz sayesinde online satışlarımız %300 arttı.&rdquo;
                        </p>
                    </div>

                    <div className="bg-white rounded-lg shadow-md p-6 text-center">
                        <div className="w-16 h-16 bg-purple-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                            <span className="text-2xl font-bold text-purple-600">C</span>
                        </div>
                        <h3 className="text-xl font-semibold mb-2">Örnek Müşteri 3</h3>
                        <p className="text-gray-600">
                            &ldquo;Mobil uygulamamızın geliştirilmesi sürecinde çok memnun kaldık. Kullanıcı dostu arayüz ve hızlı performans.&rdquo;
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
