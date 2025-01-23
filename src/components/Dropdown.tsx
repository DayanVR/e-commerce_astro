import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import { productsCategories } from "@lib/variables";

export default function Example() {
  return (
    <Menu as="div" className="relative inline-block text-left font-satochi">
      <div>
        <MenuButton className="inline-flex items-center gap-x-1 text-base xl:text-xl">
          Shop
          <svg
            aria-hidden="true"
            viewBox="0 0 256 512"
            className="svg-inline--fa fa-angle-down fa-w-8 fa-7x size-4"
          >
            <path
              fill="currentColor"
              d="M119.5 326.9L3.5 209.1c-4.7-4.7-4.7-12.3 0-17l7.1-7.1c4.7-4.7 12.3-4.7 17 0L128 287.3l100.4-102.2c4.7-4.7 12.3-4.7 17 0l7.1 7.1c4.7 4.7 4.7 12.3 0 17L136.5 327c-4.7 4.6-12.3 4.6-17-.1z"
            ></path>
          </svg>
        </MenuButton>
      </div>

      <MenuItems className="absolute left-0 z-10 mt-2 w-36 origin-top-right divide-y divide-gray-100 rounded-md bg-white text-sm shadow-lg ring-1 ring-black/5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in">
        {productsCategories.map((item) => (
          <MenuItem key={item.name}>
            <a
              href={item.href}
              className="block px-4 py-2 text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900 data-[focus]:outline-none"
            >
              {item.name}
            </a>
          </MenuItem>
        ))}
      </MenuItems>
    </Menu>
  );
}
