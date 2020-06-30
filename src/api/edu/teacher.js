import request from '@/utils/request'

export default {
    //1.讲师列表  查询分页
    getTeacherListPage(current,limit,teacherQuery){
        return request({
            //url:'/eduservice/edu-teacher/pageTeacher/'+current+'/'+limit,
            url:`/eduservice/edu-teacher/pageTeacherCondition/${current}/${limit}`,
            method:'post',
            data:teacherQuery
        })
    },
    deleteTeacher(id){
        return request({
            url:`/eduservice/edu-teacher/teacher/${id}`,
            method:'delete'
        })
    },
    saveTeacher(teacher){
        return request({
            //url:'/eduservice/edu-teacher/pageTeacher/'+current+'/'+limit,
            url:`/eduservice/edu-teacher/addTeacher`,
            method:'post',
            data:teacher
        })
    },
    getTeacherInfo(id){
        return request({
            url:`/eduservice/edu-teacher/teacher/${id}`,
            method:'get',
        })
    },
    updateTeacher(teacher){
        return request({
            //url:'/eduservice/edu-teacher/pageTeacher/'+current+'/'+limit,
            url:`/eduservice/edu-teacher/updateTeacher`,
            method:'post',
            data:teacher
        })
    }
}