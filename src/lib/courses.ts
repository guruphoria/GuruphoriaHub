import type { Course } from './types';
import {
    collection,
    getDocs,
    doc,
    getDoc,
    Firestore,
  } from 'firebase/firestore';
  
  export async function getAllCourses(db: Firestore): Promise<Course[]> {
    const coursesCol = collection(db, 'courses');
    const coursesSnapshot = await getDocs(coursesCol);
    const coursesList = coursesSnapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data(),
    })) as Course[];
    return coursesList;
  }
  
  export async function getCourseById(
    db: Firestore,
    id: string
  ): Promise<Course | undefined> {
    const courseRef = doc(db, 'courses', id);
    const courseSnap = await getDoc(courseRef);
  
    if (courseSnap.exists()) {
      return { id: courseSnap.id, ...courseSnap.data() } as Course;
    } else {
      return undefined;
    }
  }

  /**
   * Fetches only the IDs of all courses. Useful for generateStaticParams.
   */
  export async function getAllCourseIds(db: Firestore): Promise<string[]> {
    const coursesCol = collection(db, 'courses');
    const coursesSnapshot = await getDocs(coursesCol);
    return coursesSnapshot.docs.map(doc => doc.id);
  }
