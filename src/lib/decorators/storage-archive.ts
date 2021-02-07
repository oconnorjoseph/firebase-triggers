import { getClassMethod, getClassName, addFirebaseFunction } from '../internal-methods';
import { FirebaseFunction, FirebaseTriggerType } from '../types';


export function onStorageArchive(bucketName?: string) {
  return (target: any, key: string) => {
    const firebaseFunction: FirebaseFunction = {
      className: getClassName(target),
      methodName: key,
      method: getClassMethod(target, key),
      trigger: FirebaseTriggerType.STORAGE_ARCHIVE,
      key: bucketName
    };
    addFirebaseFunction(firebaseFunction);
  };
}
