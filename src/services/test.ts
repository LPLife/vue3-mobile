import type { itemList } from '@/types/test';
import { request } from '@/utils/request';

export const getItemList = () => request<itemList>(`http://localhost/patient/message/sys/list1`);
