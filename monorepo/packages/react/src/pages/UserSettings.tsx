import Breadcrumb from "@/components/ui/Breadcrumb";
import Column from "@/components/layout/Column";
import Card from "@/components/ui/Card";
import BaseInput from "@/components/forms/BaseInput";
import BasicSelectInput from "@/components/forms/BasicSelectInput";
import TextareaInput from "@/components/forms/TextareaInput";
import React from "react";
import Row from "@/components/layout/Row";
import { HeadingL3 } from "@/components/typograph/Heading";
import Paragraph from "@/components/typograph/Paragraph";
import Button from "@/components/ui/Button";
import PageContainer from "@/components/layout/PageContainer";

export default function UserSettingsPage() {
  return (
    <PageContainer>
      <Breadcrumb currentPageName={"User Settings"} />
      <header>
        <HeadingL3>User Settings</HeadingL3>
        <Paragraph>User settings allow users to customize the behavior of an application.</Paragraph>
      </header>
      <div className="grid grid-cols-2 my-3 gap-5">
        <Column>
          <Card>
            <Row>
              <img
                className="rounded w-28 object-cover h-28"
                src="https://images.unsplash.com/photo-1528892952291-009c663ce843?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=944&q=80"
                alt="Extra large avatar"
              />
              <Column gap="md">
                <div>
                  <HeadingL3>Ezzdin Atef</HeadingL3>
                  <Paragraph>JPG, GIF or PNG. Max size of 800K</Paragraph>
                </div>
                <Row gap="md">
                  <Button size="sm">
                    <Row gap="sm" align="center">
                      <svg
                        className="w-4 h-4"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M5.5 13a3.5 3.5 0 01-.369-6.98 4 4 0 117.753-1.977A4.5 4.5 0 1113.5 13H11V9.413l1.293 1.293a1 1 0 001.414-1.414l-3-3a1 1 0 00-1.414 0l-3 3a1 1 0 001.414 1.414L9 9.414V13H5.5z"></path>
                        <path d="M9 13h2v5a1 1 0 11-2 0v-5z"></path>
                      </svg>
                      Upload Picture
                    </Row>
                  </Button>
                  <Button color="light" size="sm">
                    Delete
                  </Button>
                </Row>
              </Column>
            </Row>
          </Card>
          <Card>
            <Column>
              <h3 className="text-lg font-medium">User Settings</h3>
              <BaseInput id="user_name" label="Name" placeholder="John Doe" />
              <BaseInput id="user_email" label="Email" placeholder="example@domain.com" />
              <BaseInput id="user_age" type="number" label="Age" placeholder="00" />
              <BasicSelectInput
                id="user_country"
                label="Country"
                options={[
                  { label: "Choose your country", value: "na" },
                  { label: "Egypt", value: "eg" },
                ]}
              />
              <TextareaInput id="user_description" label="Description" placeholder="" className="h-28" />
              <Row gap="sm">
                <Button>Save Changes</Button>
                <Button color="light">Cancel</Button>
              </Row>
            </Column>
          </Card>
        </Column>
        <Column>
          <Card>
            <Column>
              <h3 className="text-lg font-medium">Password information</h3>
              <BaseInput id="current_password" type="password" label="Current Password" />
              <BaseInput id="new_password" type="password" label="New Password" />
              <BaseInput id="confirm_password" type="password" label="Confirm Password" />
              <Row gap="sm">
                <Button>Save Changes</Button>
                <Button color="light">Cancel</Button>
              </Row>
            </Column>
          </Card>
        </Column>
      </div>
    </PageContainer>
  );
}
