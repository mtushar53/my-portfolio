export default function validate(
  name,
  value,
  errors = { phone: "", email: "", password: "" }
) {
  switch (name) {
    case "name":
      if (!value) {
        errors.name = "Name is required.";
      } else {
        delete errors.name;
      }
      break;
    case "email":
      if (!value) {
        errors.email = "Email address is required.";
      } else if (
        !new RegExp(
          /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        ).test(value)
      ) {
        errors.email = "Enter a valid email address.";
      } else {
        delete errors.email;
      }
      break;
    case "subject":
      if (!value) {
        errors.subject = "Subject is required.";
      } else {
        delete errors.subject;
      }
      break;
    case "message":
      if (!value) {
        errors.message = "Message is required.";
      } else {
        delete errors.message;
      }
      break;
  }
  return errors;
}
