import { Card } from "@/components/ui/card";

interface SidebarProps extends React.HTMLAttributes<HTMLDivElement> {}

export default function Sidebar({ ...props }: SidebarProps) {
  return (
    <div className="space-y-4" {...props}>
      <Card className="p-4">
        <h2 className="font-semibold mb-2">Popularne tematy</h2>
        <div className="space-y-2">
          <a href="#" className="block text-sm text-gray-600 hover:text-gray-900">
            Reforma sądownictwa
          </a>
          <a href="#" className="block text-sm text-gray-600 hover:text-gray-900">
            Budżet 2024
          </a>
          <a href="#" className="block text-sm text-gray-600 hover:text-gray-900">
            Wybory samorządowe
          </a>
        </div>
      </Card>
      
      <Card className="p-4">
        <h2 className="font-semibold mb-2">Top Politycy</h2>
        <div className="space-y-2">
          {/* Tu możesz dodać komponenty wyświetlające top polityków z Firebase */}
        </div>
      </Card>
    </div>
  );
}