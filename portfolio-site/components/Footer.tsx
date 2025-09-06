const Footer = () => {
  const year = new Date().getFullYear();
  const affiliates = [
    { name: 'CBB Homes', url: 'https://cbb.homes' },
    { name: 'Icon Coupons', url: 'https://icon.coupons' },
    { name: 'Fort Health', url: 'https://fort.health' },
    { name: 'Affiliate Placeholder 1', url: '#' },
    { name: 'Affiliate Placeholder 2', url: '#' },
  ];

  return (
    <footer className="bg-gray-800 text-white mt-20">
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-6">
          <h3 className="text-lg font-semibold">Affiliates</h3>
          <div className="flex justify-center flex-wrap gap-x-6 gap-y-2 mt-3">
            {affiliates.map((affiliate) => (
              <a
                key={affiliate.name}
                href={affiliate.url}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-400"
              >
                {affiliate.name}
              </a>
            ))}
          </div>
        </div>
        <div className="text-center border-t border-gray-700 pt-4">
          <p>&copy; {year} Prefrontal Corporate. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
