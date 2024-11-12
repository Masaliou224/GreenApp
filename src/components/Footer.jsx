const Footer = () => {
  return (
    <footer className="bg-green-500 text-white py-6">
      <div className="container mx-auto px-4">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-6">
          {/* Logo Section */}
          <div>
            <p className="text-2xl font-bold whitespace-nowrap">
              green link
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-3">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <p className="hover:underline">Accueil</p>
              </li>
              <li>
                <p className="hover:underline">À propos</p>
              </li>
              <li>
                <p className="hover:underline">Marketplace</p>
              </li>
              <li>
                <p className="hover:underline">Blog</p>
              </li>
            </ul>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-semibold mb-3">Links</h4>
            <ul className="space-y-2">
              <li>
                <p className="hover:underline">Droits droits réservés</p>
              </li>
              <li>
                <p className="hover:underline">Politique de confidentialité</p>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="font-semibold mb-3">Newsletter</h4>
            <form className="flex flex-col space-y-2">
              <input
                type="email"
                placeholder="Entrez votre email"
                className="px-3 py-2 rounded text-black"
                required
              />
              <button 
                type="submit"
                className="bg-white text-green-500 hover:bg-gray-100"
              >
                S'inscrire
              </button>
            </form>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-white/20 pt-4 mt-6">
          <div className="text-center text-sm">
            <p>Green link © {new Date().getFullYear()} Tous droits réservés</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;