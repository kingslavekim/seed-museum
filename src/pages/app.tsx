import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { Routes, Route } from 'react-router-dom';
import Main from './main/main.tsx'
import Info from './tab1/info/main.tsx'
import Reservation from './tab1/reservation/main.tsx'
import Directions from './tab1/directions/main.tsx'

import Pdisplay from './tab2/pdisplay/main.tsx'
import Sdisplay from './tab2/sdisplay/main.tsx'
import Fdisplay from './tab2/fdisplay/main.tsx'
import Museum from './tab2/museum/main.tsx'
import Video from './tab2/video/main.tsx'

import Greetings from './tab7/greetings/main.tsx'
import History from './tab7/history/main.tsx'
import Facilities from './tab7/facilities/main.tsx'
import Notice from './tab7/notice/main.tsx'
import NoticeDetail from './tab7/noticeDetail/main.tsx'

import Experience from './tab3/experience/main.tsx'
import SocialFarm from './tab3/socialFarm/main.tsx'
import Healing from './tab3/healing/main.tsx'
import SeedRelics from './tab4/seedRelics/main.tsx'

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <BrowserRouter>
            <Routes>
                <Route path="/seed/" element={<Main />} />
                <Route path="/seed/info" element={<Info />} />
                <Route path="/seed/reservation" element={<Reservation />} />
                <Route path="/seed/directions" element={<Directions />} />

                <Route path="/seed/pdisplay" element={<Pdisplay />} />
                <Route path="/seed/sdisplay" element={<Sdisplay />} />
                <Route path="/seed/fdisplay" element={<Fdisplay />} />
                <Route path="/seed/museum" element={<Museum />} />
                <Route path="/seed/video" element={<Video />} />

                <Route path="/seed/experience" element={<Experience />} />
                <Route path="/seed/socialFarm" element={<SocialFarm />} />
                <Route path="/seed/healing" element={<Healing />} />

                <Route path="/seed/seedRelics" element={<SeedRelics />} />

                <Route path="/seed/greetings" element={<Greetings />} />
                <Route path="/seed/history" element={<History />} />
                <Route path="/seed/facilities" element={<Facilities />} />
                <Route path="/seed/notice" element={<Notice />} />
                <Route path="/seed/notice/:id" element={<NoticeDetail />} />
            </Routes>
        </BrowserRouter>
    </StrictMode>,
)