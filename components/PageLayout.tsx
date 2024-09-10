export default function PageLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <div
      style={{
        marginTop: -50,
        backgroundColor: 'white',
        marginLeft: 50,
        marginRight: 50,
        marginBottom: -50,
        borderRadius: 10,

        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',

        boxShadow:
          'rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px',
      }}
    >
      {children}
    </div>
  );
}
