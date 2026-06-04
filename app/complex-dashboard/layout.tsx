// import UserAnalytics from "path/UserAnalytics";
// import RevenueMetrics from "path/RevenueMetrics";
// import Notifications from "path/Notifications";
// //This is traditional layout file, it will be used for all the pages in the complex-dashboard folder. It will render the children (the page content) and also the common components like UserAnalytics, RevenueMetrics and Notifications.

//using slot @ no need to import the components, they will be automatically rendered in the layout when we use the @ syntax in the page files.
export default function ComplexDashboardLayout({
  children,
  user,
  revenue,
  notifications,
}: {
  children: React.ReactNode;
  user: React.ReactNode;
  revenue: React.ReactNode;
  notifications: React.ReactNode;
}) {
  return (
    <div>
      <div> {children}</div>
      {/* <UserAnalytics />
      <RevenueMetrics />
      <Notifications />
      
      if we use old traditional way but with slots ..the following*/}
      <div style={{ display: "flex" }}>
        <div style={{ display: "flex-column" }}>
          <div>{user}</div>
          <div>{revenue}</div>
        </div>
        <div style={{ display: "flex", flex: 1 }}>{notifications}</div>
      </div>
    </div>
  );
}
