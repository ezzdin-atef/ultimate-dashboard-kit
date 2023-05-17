import BaseInput from "@/components/forms/BaseInput";
import BasicSelectInput from "@/components/forms/BasicSelectInput";
import TextareaInput from "@/components/forms/TextareaInput";
import ASideTitle from "@/components/typograph/ASideTitle";
import React from "react";

export default function FormsComponentsPage() {
  return (
    <div className="py-2 mx-3">
      <ASideTitle>Forms Components</ASideTitle>
      <div className="grid grid-cols-2 my-3 gap-5">
        <div>
          <div className="py-5 px-2 border bg-white rounded-lg flex flex-col gap-5 justify-start">
            <h3 className="text-lg font-medium">User Settings</h3>
            <BaseInput id="user_name" label="Name" placeholder="John Doe" />
            <BaseInput id="user_email" label="Email" placeholder="example@domain.com" />
            <BaseInput id="user_age" type="number" label="Age" placeholder="00" />
            <BasicSelectInput
              id="user_country"
              label="Country"
              value="na"
              options={[
                { label: "Choose your country", value: "na" },
                { label: "Egypt", value: "eg" },
              ]}
            />
            <TextareaInput id="user_description" label="Description" placeholder="" className="h-28" />
          </div>
        </div>
        <div>
          <div className="py-5 px-2 border bg-white rounded-lg flex flex-col gap-5">
            <h3 className="text-lg font-medium">Password information</h3>
            <BaseInput id="current_password" type="password" label="Current Password" />
            <BaseInput id="new_password" type="password" label="New Password" />
            <BaseInput id="confirm_password" type="password" label="Confirm Password" />
          </div>
        </div>
      </div>
    </div>
  );
}
