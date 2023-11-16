import { IUser } from "@/interfaces/IUser";

export interface ModalProps {
  user: IUser;
  onClose: () => void;
}
