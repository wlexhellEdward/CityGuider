import { IUser } from "@/interfaces/IUser";

export interface CardUserProps {
  user: IUser;
  onClickEditUser: (user: IUser) => void;
}
