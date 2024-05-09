import{u as x,r as h,c as p,j as e,L as f,A as g,S as b}from"./index-JnEowxGR.js";import{u as w,c as j,a as d}from"./index.esm-C9_yQvjQ.js";import{Q as y,B as N}from"./react-toastify.esm-DiV-Vlhx.js";import{O as v}from"./OuterHeader-YzMK07OG.js";const I=()=>{const o=x(),[c,r]=h.useState(!1),s=w({initialValues:{email:"",password:""},validationSchema:j({email:d().email("Invalid email address").required("Email is required"),password:d().required("Enter your password")})}),m=p(b,g),i=async l=>{var n;if(l.preventDefault(),Object.keys(s.errors).length==0)try{r(!0);const{data:a,error:t}=await m.auth.signInWithPassword({email:s.values.email,password:s.values.password});((n=a==null?void 0:a.user)==null?void 0:n.role)=="authenticated"&&(console.log(a==null?void 0:a.user),localStorage.setItem("authenticated",!0),localStorage.setItem("userId",a.user.id),localStorage.setItem("email",a.user.email),localStorage.setItem("firstName",a.user.user_metadata.first_name),o("/home")),t&&N.error(t==null?void 0:t.message)}catch{r(!1),localStorage.setItem("authenticated",!1)}finally{r(!1)}},u=l=>{o(l)};return e.jsxs("div",{className:" py-16",children:[e.jsx(v,{}),e.jsx("div",{className:"flex items-center justify-center ",children:e.jsxs("div",{className:"bg-white px-8 py-6 rounded-lg shadow-md w-full max-w-md  border-2 text-left mx-4",children:[e.jsx("h2",{className:"text-2xl text-center font-bold mb-6",children:"Login"}),e.jsxs("form",{id:"registerhtmlForm",onSubmit:i,children:[e.jsxs("div",{className:"mb-4",children:[e.jsx("label",{htmlFor:"email",className:"block text-gray-700 text-sm font-bold mb-2 text-left",children:"Email Address"}),e.jsx("input",{type:"email",id:"email",name:"email",value:s.values.email,onChange:s.handleChange,onBlur:s.handleBlur,className:"shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline",required:!0}),e.jsx("span",{id:"emailError",className:"text-red-500 text-sm ",children:s.touched.email&&s.errors.email})]}),e.jsxs("div",{className:"mb-4",children:[e.jsx("label",{htmlFor:"password",className:"block text-gray-700 text-sm font-bold mb-2 text-left",children:"Password"}),e.jsx("input",{type:"password",id:"password",name:"password",value:s.values.password,onChange:s.handleChange,onBlur:s.handleBlur,className:"shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline",required:!0}),e.jsxs("span",{id:"passwordError",className:"text-red-500 text-sm ",children:[" ",s.touched.password&&s.errors.password]}),e.jsx(f,{to:"/reset-password",className:"pl-2 text-blue-500 underline cursor-pointer  text-right block text-sm",children:"Forgot Password?"})]}),e.jsx("button",{disabled:c,onClick:i,type:"submit",id:"submitButton",className:"bg-black 0 text-white font-bold py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-offset-2 flex justify-end items-end",children:"Login"})]}),e.jsxs("p",{className:"mt-2",children:["Don't have an account yet?"," ",e.jsx("a",{className:"text-blue-500 underline cursor-pointer block",onClick:()=>u("/register"),children:"Click here to create one."})]})]})}),e.jsx(y,{})]})};export{I as default};
