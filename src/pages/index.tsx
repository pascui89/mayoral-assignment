import Head from "next/head";
import ProductListing from "@/components/product-listing";

export default function Home() {
  return (
    <>
      <Head>
          <title>My E-commerce</title>
          <meta name="description" content="Browse our collection of products with advanced filtering and sorting options." />
      </Head>
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6">Product Listing</h1>
        <ProductListing />
      </main>
    </>
  )
}

