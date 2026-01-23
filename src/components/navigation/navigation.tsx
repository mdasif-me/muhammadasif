"use client"

import Link from "next/link"

import styles from "@/styles/navigation.module.css"

import { SOCIALS } from "../../features/home/constants"
import { menus } from "../constants"
import StaggeredMenu from "../ui/staggered-menu"
import { Menu } from "./menu"

const Navigation = () => {
  return (
    <nav>
      <div className="flex justify-center fixed w-full top-7 z-50">
        <section className={`${styles.navigation} gap-1 container mx-auto`}>
          <p className={styles.logo}>Asif</p>
          <ul className={`${styles.menus} md:flex hidden`}>
            {menus.map((menu) => (
              <Menu key={menu.name} menu={menu} />
            ))}
          </ul>

          <div className="flex items-center">
            <Link href="#contact" className="lg:block hidden">
              <button
                className={`primary_button cursor-pointer ${styles.menu}`}
              >
                Contact
              </button>
            </Link>
            <StaggeredMenu menus={menus} socials={SOCIALS} />
          </div>
        </section>
      </div>
    </nav>
  )
}

export default Navigation
