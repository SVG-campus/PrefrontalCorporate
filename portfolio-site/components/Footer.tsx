import { Button } from "@/components/ui/button";

const Footer = () => {
  const year = new Date().getFullYear();
  const affiliates = [
    { name: 'CBB', url: 'https://cbb.homes' },
    { name: 'icon', url: 'https://icon.coupons' },
    { name: 'Fort', url: 'https://fort.health' },
  ];

  return (
    <footer className="bg-gray-800 text-white mt-20">
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-6">
          <h3 className="text-lg font-semibold">Affiliates</h3>
          <div className="flex justify-center flex-wrap gap-x-2 gap-y-2 mt-3">
            {affiliates.map((affiliate) => (
              <Button key={affiliate.name} variant="link" asChild className="text-gray-300 hover:text-white">
                <a
                  href={affiliate.url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {affiliate.name}
                </a>
              </Button>
            ))}
          </div>
        </div>
        <div className="text-center border-t border-gray-700 pt-6">
          <p>&copy; {year} Prefrontal Corporate. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
