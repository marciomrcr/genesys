/*
  Warnings:

  - You are about to drop the column `course_Id` on the `classes` table. All the data in the column will be lost.
  - You are about to drop the column `class_Id` on the `enrollments` table. All the data in the column will be lost.
  - You are about to drop the column `studentId` on the `enrollments` table. All the data in the column will be lost.
  - Added the required column `course_id` to the `classes` table without a default value. This is not possible if the table is not empty.
  - Added the required column `class_id` to the `enrollments` table without a default value. This is not possible if the table is not empty.
  - Added the required column `student_id` to the `enrollments` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "classes" DROP CONSTRAINT "classes_course_Id_fkey";

-- DropForeignKey
ALTER TABLE "enrollments" DROP CONSTRAINT "enrollments_class_Id_fkey";

-- DropForeignKey
ALTER TABLE "enrollments" DROP CONSTRAINT "enrollments_studentId_fkey";

-- AlterTable
ALTER TABLE "classes" DROP COLUMN "course_Id",
ADD COLUMN     "course_id" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "enrollments" DROP COLUMN "class_Id",
DROP COLUMN "studentId",
ADD COLUMN     "class_id" TEXT NOT NULL,
ADD COLUMN     "student_id" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "enrollments" ADD CONSTRAINT "enrollments_student_id_fkey" FOREIGN KEY ("student_id") REFERENCES "students"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "enrollments" ADD CONSTRAINT "enrollments_class_id_fkey" FOREIGN KEY ("class_id") REFERENCES "classes"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "classes" ADD CONSTRAINT "classes_course_id_fkey" FOREIGN KEY ("course_id") REFERENCES "courses"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
