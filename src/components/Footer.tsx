export default function Footer() {
  return (
    <footer className="bg-orange-900 text-amber-50 py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h3 className="text-xl font-bold mb-2">Foodalppo</h3>
            <p className="text-sm">Syrisch streetfood met liefde uit Aleppo</p>
          </div>
          
          <div className="flex space-x-6">
            <a href="#menu" className="hover:text-orange-300 transition duration-300">Menu</a>
            <a href="#location" className="hover:text-orange-300 transition duration-300">Locatie</a>
            <a href="#about" className="hover:text-orange-300 transition duration-300">Over ons</a>
            <a href="#contact" className="hover:text-orange-300 transition duration-300">Contact</a>
          </div>
        </div>
        
        <div className="mt-8 pt-6 border-t border-orange-800 text-center text-sm">
          <p>&copy; {new Date().getFullYear()} Foodalppo. Alle rechten voorbehouden.</p>
        </div>
      </div>
    </footer>
  );
}
