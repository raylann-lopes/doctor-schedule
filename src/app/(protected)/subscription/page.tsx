import {
  PageActions,
  PageContainer,
  PageContent,
  PageDescription,
  PageHeader,
  PageHeaderContent,
  PageTitle,
} from "@/components/ui/page-container";

import { SubscriptionPlan } from "./components/subscription-plan";

const SubscriptionPage = () => {
  return (
    <PageContainer>
      <PageHeader>
        <PageHeaderContent>
          <PageTitle>Assinatura</PageTitle>
          <PageDescription>Gerencie a sua assinatura.</PageDescription>
        </PageHeaderContent>
        <PageActions>
          <h1>teste</h1>
        </PageActions>
      </PageHeader>
      <PageContent>
        <SubscriptionPlan className="w-[350px]" userEmail={""} />
      </PageContent>
    </PageContainer>
  );
};

export default SubscriptionPage;
