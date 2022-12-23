import { Navbar, Sidebar } from './components'
import { Routes, Route } from 'react-router-dom'
import { BarChartPage, ContactsPage, DashboardPage,
        FAQPage, FormPage, GeographyPage, CalendarPage,
        InvoicesPage, LineChartPage, PieChartPage, TeamPage } from './pages'


const App = () => {

  return (
    <div className='font-SourceSanPro flex relative h-[100%] w-[100%]'>
      <Sidebar />
      <main className='h-[100%] w-[100%] overflow-scroll'>
        <Navbar />
        <Routes>
          <Route path='/' element={<DashboardPage />} />
          <Route path='/chart/bar' element={<BarChartPage />} />
          <Route path='/chart/pie' element={<PieChartPage />} />
          <Route path='/chart/line' element={<LineChartPage />} />
          <Route path='/calendar' element={<CalendarPage />} />
          <Route path='/contacts' element={<ContactsPage />} />
          <Route path='/invoices' element={<InvoicesPage />} />
          <Route path='/team' element={<TeamPage />} />
          <Route path='/form' element={<FormPage />} />
          <Route path='/geography' element={<GeographyPage />} />
          <Route path='/faq' element={<FAQPage />} />
        </Routes>
      </main>
    </div>
    
  )
}

export default App