import React from "react";
import { useAddress, useDisconnect, useMetamask } from "@thirdweb-dev/react";
import Link from "next/link";
import {
  BellIcon,
  ShoppingCartIcon,
  ChevronDownIcon,
  MagnifyingGlassIcon,
  PlayCircleIcon,
} from "@heroicons/react/24/outline";
import Image from "next/image";

type Props = {};

const Header = (props: Props) => {
  const connectWithMetamask = useMetamask();
  const disconnect = useDisconnect();
  const address = useAddress();

  return (
    <div className="max-w-6xl mx-auto p-2">
      <nav className="flex justify-between">
        <div className="flex items-center space-x-2 text-sm">
          {address ? (
            <button onClick={disconnect} className="connectWalletBtn">
              Hi, {address.slice(0, 5) + "..." + address.slice(-4)}
            </button>
          ) : (
            <button onClick={connectWithMetamask} className="connectWalletBtn">
              Connect your wallet
            </button>
          )}

          <p className="headerLink hover:link">Daily Deals</p>
          <p className="headerLink hover:link">Help & Contact</p>
        </div>

        <div className="flex items-center space-x-4 text-sm">
          <p className="headerLink hover:link">Ship to</p>
          <p className="headerLink hover:link">Sell</p>
          <p className="headerLink hover:link">Watchlist</p>

          <Link href="/addItem" className="flex items-center hover:link">
            Add to inventory
            <ChevronDownIcon className="h-4" />
          </Link>

          <BellIcon className="h-6 w-6 hover:link" />
          <ShoppingCartIcon className="h-6 w-6 hover:link" />
        </div>
      </nav>

      <hr className="mt-2" />

      <section className="flex items-center space-x-2 py-5">
        <div className="h-16 w-16 mt-0 sm:w-28 md:w-44 md:mt-2 cursor-pointer flex-shrink-0">
          <Link href="/">
            <Image
              className="h-full w-full object-contain"
              alt="Thirdweb Logo"
              src="https://links.papareact.com/bdb"
              width={100}
              height={100}
            />
          </Link>
        </div>

        <button className="hidden lg:flex items-center space-x-2 w-20 hover:link">
          <p className="text-gray-600 text-sm">Shop by Category</p>
          <ChevronDownIcon className="h-4 flex-shrink-0" />
        </button>

        <div className="flex items-center space-x-2 px-2 md:px-5 py-2 border-black border-2 flex-1">
          <MagnifyingGlassIcon className="w-5 text-gray-400" />
          <input
            className="flex-1 outline-none"
            placeholder="Search for Anything"
            type="text"
          />
        </div>

        <button className="hidden sm:inline bg-blue-600 text-white px-5 md:px-10 py-2 border-2 border-blue-600">
          Search
        </button>

        <Link href="/listItem">
          <button className="border-2 border-blue-600 px-5 md:px-10 py-2 text-blue-600 hover:bg-blue-600/50 hover:text-white">
            List Item
          </button>
        </Link>
      </section>

      <hr />

      <section className="flex py-3 space-x-6 text-xs md:text-sm whitespace-nowrap justify-center px-6">
        <p className="link">Home</p>
        <p className="link">Electronics</p>
        <p className="link">Computers</p>
        <p className="link hidden md:inline">Video Games</p>
        <p className="link hidden lg:inline">Home & Garden</p>
        <p className="link hidden lg:inline">Health & Beauty</p>
        <p className="link hidden md:inline">Collectibles and Art</p>
        <p className="link hidden lg:inline">Books</p>
        <p className="link hidden md:inline">Music</p>
        <p className="link hidden md:inline">Deals</p>
        <p className="link hidden lg:inline">Other</p>
        <p className="link">More</p>
      </section>
    </div>
  );
};

export default Header;
