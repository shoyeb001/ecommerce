/*
  Warnings:

  - Added the required column `longDesc` to the `Product` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Cart" ALTER COLUMN "id" SET DEFAULT concat('cart_', replace(cast(gen_random_uuid() as text), '-', ''));

-- AlterTable
ALTER TABLE "Category" ALTER COLUMN "id" SET DEFAULT concat('cat_', replace(cast(gen_random_uuid() as text), '-', ''));

-- AlterTable
ALTER TABLE "Order" ALTER COLUMN "id" SET DEFAULT concat('order_', replace(cast(gen_random_uuid() as text), '-', ''));

-- AlterTable
ALTER TABLE "OrderItems" ALTER COLUMN "id" SET DEFAULT concat('orditem_', replace(cast(gen_random_uuid() as text), '-', ''));

-- AlterTable
ALTER TABLE "Product" ADD COLUMN     "longDesc" TEXT NOT NULL,
ALTER COLUMN "id" SET DEFAULT concat('prod_', replace(cast(gen_random_uuid() as text), '-', ''));

-- AlterTable
ALTER TABLE "Review" ALTER COLUMN "id" SET DEFAULT concat('rev_', replace(cast(gen_random_uuid() as text), '-', ''));

-- AlterTable
ALTER TABLE "User" ALTER COLUMN "id" SET DEFAULT concat('user_', replace(cast(gen_random_uuid() as text), '-', ''));

-- AlterTable
ALTER TABLE "Wishlist" ALTER COLUMN "id" SET DEFAULT concat('wli_', replace(cast(gen_random_uuid() as text), '-', ''));
