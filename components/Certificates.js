/* importing modules */
import certificatesData from "@constants/certifcatesData";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";


export default function Certificates() {
  return (
    <>
 
      <section className="pageTop">
      <div className="max-w-6xl mx-auto h-48 bg-white dark:bg-gray-800">
        <h1 className=" text-5xl md:text-9xl font-bold py-20 text-center md:text-left">
            Certifactions.
        </h1>
      </div>
 
        <div className="max-w-6xl mx-auto mt-10 h-60 bg-white dark:bg-gray-800">
          {certificatesData.map((cer, index) => {
            return (
            <section>
                <div className="flex items-center gap-3">
                  <div className="relative flex items-center justify-center">
                    {/* <Image
                      width={40}
                      height={40}
                      src={cer.issuedBy.orgName}
                      alt={cer.issuedBy.orgName}
                    /> */}
                    <Image src={cer.issuedBy.orgLogo} width={40} height={40} />
                  </div>
                  <div className="flex flex-col ">
                    <h3 className="font-semibold text-sm sm:text-base md:text-lg text-neutral-900 dark:text-neutral-200">
                      {cer.title}
                    </h3>
                    <p className="text-xs text-gray-500">
                      {cer.issuedBy.orgName}
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-5 text-sm justify-between">
                  <p className="text-gray-500 text-sm">{cer.issuedDate}</p>
                  <Link href={cer.urls.pdfURL} passHref>
                    <motion.a
                      href={cer.urls.pdfURL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-1 rounded-md bg-neutral-200 dark:bg-black shadow dark:text-white transform duration-200 font-medium  active:scale-90 lg:hover:bg-black lg:hover:text-white dark:lg:hover:bg-white dark:lg:hover:text-black"
                    >
                      Voir
                    </motion.a>
                  </Link>
                </div>
                </section>
            );
          })}
        </div>
      </section>
    </>
  );
}