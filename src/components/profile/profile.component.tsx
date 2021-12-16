import React from "react";
import { Form } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { toggleCheckBox } from "../../store/profile/profileSlice";
import { AppDispatch, RootState } from "../../store/store";

export const ProfileComponent: React.FC<{}> = () => {
  const dispatch = useDispatch<AppDispatch>();
  const isChecked = useSelector((state: RootState) => state.profile.isChecked);
  const handleCheck = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(toggleCheckBox());
  };
  return (
    <Form>
      <Form.Group className="m-3" controlId="isCheckedCheckbox">
        <Form.Check
          type="checkbox"
          label="Check me, please"
          onChange={handleCheck}
          checked={isChecked}
        />
      </Form.Group>
    </Form>
  );
};
