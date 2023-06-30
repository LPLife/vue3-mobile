import type { itemList } from '@/types/test';
import { request } from '@/utils/request';

export const getItemList = () => request<itemList>(`/patient/message/sys/list1`);
