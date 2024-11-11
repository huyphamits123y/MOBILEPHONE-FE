import CompanyDetailsPage from '../pages/CompanyDetailsPage/CompanyDetailsPage'
import HomePage from '../pages/HomePage/HomePage'
import JobDetailsPage from '../pages/JobDetailsPage/JobDetailsPage'
import ManagerPage from '../pages/ManagerPage/ManagerPage'
import ProfilePage from '../pages/ProfilePage/ProfilePage'
import RecruitmentPage from '../pages/RecruitmentPage/RecruitmentPage'
import SearchJobFieldPage from '../pages/SearchJobPage/SearchJobPage'
import SearchJobPage from '../pages/SearchJobPage/SearchJobPage'
import SignInPage from '../pages/SignInPage/SignInPage'
import SignUpPage from '../pages/SignUpPage/SignUpPage'
import UpdateProfilePage from '../pages/UpdateProfilePage/UpdateProfilePage'
import UpdateRequireJobPage from '../pages/UpdateRequireJobPage/UpdateRequireJobPage'

export const routes = [
    {
        path: '/',
        page: HomePage,


    },
    {
        path: '/signin',
        page: SignInPage,


    },
    {
        path: '/signup',
        page: SignUpPage,


    },
    {
        path: '/companydetails',
        page: CompanyDetailsPage,


    },
    {
        path: '/jobdetails',
        page: JobDetailsPage,


    },
    {
        path: '/searchjob',
        page: SearchJobFieldPage,


    },
    {
        path: '/profile',
        page: ProfilePage,


    },
    {
        path: '/updateprofile',
        page: UpdateProfilePage,


    },
    {
        path: '/updaterequirejob',
        page: UpdateRequireJobPage,


    },
    {
        path: '/manager',
        page: ManagerPage,


    },
    {
        path: '/recruitment',
        page: RecruitmentPage,


    },

]